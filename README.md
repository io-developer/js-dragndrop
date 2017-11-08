# dragndrop

Pure JS drag-n-drop for any binded dom element

## Example

```html
<!doctype html>
<html>
<head>
    <script type="text/javascript" src="dragndrop.js"></script>
    <script type="text/javascript">
        dragndrop.initOnDocumentReady();
    </script>
    
    <style>
        .js-dragndrop {
            -moz-user-select: none;
            -o-user-select: none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select': none;
        }

        .outer {
            display: block;
            position: relative;
            width: 640px;
            height: 480px;
            margin: 20px;
            background-color: #EEE;
        }
        
        .inner {
            display: block;
            position: absolute;
            min-width: 100px;
            min-height: 50px;
            padding: 20px;
        }
        
        .inner--1 {
            left: 100px;
            top: 100px;
            width: 300px;
            height: 200px;
            background-color: #b1b1ff;
        }
        
        .inner--2 {
            left: 100px;
            top: 50px;
            background-color: #92f192;
        }
        
        .inner--3 {
            left: 400px;
            top: 200px;
            background-color: #ec7777;
        }
    </style>
</head>
<body>
    <div class="outer js-dragndrop-limiter">
        <div class="inner inner--1 js-dragndrop js-dragndrop-limiter">
            Content A
            
            <p>
                sub div
            </p>
            
            <div class="inner inner--2 js-dragndrop">
                Sub-content A
            </div>
        </div>
        <div class="inner inner--3 js-dragndrop">
            Content B
        </div>
    </div>
</body>
</html>
```
