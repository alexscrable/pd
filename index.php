<?php
$page_title = "Благодарность NORD DIVISION";
$thank_you_message = "Наш сайт благодарит Nord Division за все, что они делают для народа России.";
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($page_title); ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;700&display=swap" rel="stylesheet">
    <style>
        /* Базовые стили */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #0c0c0c;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4"><rect width="1" height="1" x="0" y="0" fill="rgba(255,255,255,0.02)"/></svg>');
            color: #ffffff;
            font-family: 'Verdana', sans-serif;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            line-height: 1.6;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 40px 5%;
        }

        .logo-container {
            width: 150px;
            transition: width 0.3s ease;
        }

        .logo-container img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: contain;
        }

        main {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px 5%;
        }

        .main-title {
            font-family: 'Oswald', sans-serif;
            font-weight: 700;
            font-size: 8vw;
            margin: 0 0 20px 0;
            line-height: 1.1;
            text-transform: uppercase;
            letter-spacing: -2px;
            text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.9), 
                         0px 0px 30px rgba(255, 255, 255, 0.1);
        }

        .thank-you-text {
            font-size: 24px;
            margin-bottom: 50px;
            max-width: 800px;
            color: #d1d1d1;
            font-weight: normal;
        }

        .video-section {
            width: 100%;
            max-width: 900px;
            margin: 0 auto 50px auto;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background-color: #000;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            aspect-ratio: 16 / 9;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .video-section iframe {
            width: 100%;
            height: 100%;
            border: 0;
        }

        footer {
            padding: 30px 5%;
            text-align: center;
            background-color: #0a0a0a;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-text {
            font-family: 'Oswald', sans-serif;
            font-weight: 300;
            font-size: 16px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #888888;
        }

        @media (max-width: 768px) {
            header {
                flex-direction: column;
                justify-content: center;
                gap: 20px;
                padding: 30px 5%;
            }

            .logo-container {
                width: 100px;
            }

            .main-title {
                font-size: 14vw;
                letter-spacing: -1px;
                margin-bottom: 15px;
            }

            .thank-you-text {
                font-size: 18px;
                margin-bottom: 30px;
            }

            .video-section {
                margin-bottom: 30px;
            }

            footer {
                padding: 20px 5%;
            }
            .footer-text {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="logo-container">
            <img src="logo-left.png" alt="Левый логотип">
        </div>
        <div class="logo-container">
            <img src="logo-right.png" alt="Правый логотип">
        </div>
    </header>
    
    <main>
        <h1 class="main-title">NORD DIVISION</h1>
        
        <p class="thank-you-text"><?php echo htmlspecialchars($thank_you_message); ?></p>
        
        <div class="video-section">
            <iframe width="560" height="315" 
                    src="https://www.youtube.com/embed/TXHGR_wKZMY?si=27DOfCB0kotVbqBM" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen></iframe>
        </div>
    </main>

    <footer>
        <p class="footer-text">ПІВНІЧНА ДИВІЗІЯ | SO:U TEAM | ACRABATICO | MARIO</p>
    </footer>
</body>
</html>