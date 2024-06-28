var htmlContent = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>이메일 템플릿</title>
        <style>
            .wrapper {
                padding: 20px 16px 82px;
                color: #191919;
                font-family: "Noto Sans KR", sans-serif;
                max-width: 600px;
                margin: 0 auto;
            }
            .container {
                padding: 32px;
                text-align: left;
                border-top: 3px solid #22b4e6;
                border-collapse: collapse;
            }
            .content {
                padding: 20px 20px;
                border-radius: 4px;
                text-align: center;
            }
            .footer {
                padding-top: 24px;
                border-top: 1px solid #e9e9e9;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            bgcolor="#F4F5F7"
            class="wrapper"
            style="background-color: aliceblue"
        >
            <tr>
                <td>
                    <img
                        width="92"
                        src="https://github.com/Kimbumsoo99/PrivateCloud-in-vSphere/blob/main/temp_server/uploads/logo.png?raw=true"
                        alt="로고"
                        style="width: 200px"
                    />
                    <h1
                        style="
                            font-size: 20px;
                            font-weight: 900;
                            padding-bottom: 32px;
                        "
                    >
                        WatchDog 서버 모니터링 알림 - CPU 사용률 위험
                    </h1>
                </td>
            </tr>
            <tr>
                <td>
                    <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        bgcolor="#FFFFFF"
                        class="container"
                    >
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    bgcolor="#F8F9FA"
                                    class="content"
                                >
                                    <tr>
                                        <td>
                                            <h2
                                                style="
                                                    font-size: 32px;
                                                    font-weight: bold;
                                                    padding-bottom: 16px;
                                                "
                                            >
                                                최근 {vm} CPU 부하 80% 이상 지속
                                            </h2>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td
                                style="
                                    padding-bottom: 24px;
                                    color: #a7a7a7;
                                    font-size: 12px;
                                    line-height: 20px;
                                "
                            >
                                © 2023 WatchDog.
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="footer">
                    <img
                        width="92"
                        src="https://github.com/Kimbumsoo99/PrivateCloud-in-vSphere/blob/main/temp_server/uploads/logo.png?raw=true"
                        alt="로고"
                    />
                </td>
            </tr>
        </table>
    </body>
</html>
`;

var minify = require("html-minifier").minify;
var minifiedHtml = minify(htmlContent, {
    collapseWhitespace: true,
    removeComments: true,
});

console.log(minifiedHtml);
