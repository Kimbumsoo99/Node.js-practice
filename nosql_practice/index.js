const redis = require("redis");
const crypto = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const app = express();
const client = redis.createClient(6379, "localhost");
client.connect();

app.use(express.static(__dirname));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

function encrypt(text) {
    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return { iv: iv.toString("hex"), encryptedData: encrypted };
}

function decrypt(text) {
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    let dencrypted = decipher.update(text, "hex", "utf8");
    dencrypted += decipher.final("utf8");
    return dencrypted;
}

app.get("/", function (req, res) {
    res.send("Hello SSAFY");
});

const PORT = 3333;
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행중입니다.  🚀`);
});

async function saveToRedis(key, data) {
    try {
        await client.set(key, JSON.stringify(data));
        return true;
    } catch (err) {
        console.error("Redis 저장 중 에러 발생:", err);
        return false;
    }
}

app.post("/insert", async (req, res) => {
    console.log(req.body);
    const { data } = req.body;
    console.log(data);
    const encryptedData = encrypt(data);

    const result = await saveToRedis("ssafyData", encryptedData);
    if (result) {
        res.status(200).send(
            `data : ${JSON.stringify(encryptedData)} <br/> 저장 완료!!`
        );
    } else {
        res.status(500).send("Insert error!");
    }
});

process.on("SIGINT", () => {
    client.quit();
    console.log("서버 종료 및 Redis 클라이언트 종료");
    process.exit();
});
