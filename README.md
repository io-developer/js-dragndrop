# dragndrop

Pure JS drag-n-drop for any binded dom element

## Example

```html
<!DOCTYPE HTML>
<html>
	<head>
		<link rel="stylesheet" href="dragndrop.css"/>
		<script type="text/javascript" src="dragndrop.js"></script>
		<script type="text/javascript">
			dragndrop.initOnDocumentReady();
		</script>
		
		<style type="text/css">
			.inner {
				display: block;
				position: absolute;
				min-width: 100px;
				min-height: 50px;
				padding: 20px;
				background: #F0F;
			}
			
			.outer {
				display: block;
				position: relative;
				background: #EEE;
				width: 640px;
				height: 480px;
				margin: 20px;
			}
		</style>
	</head>
	<body>
		<div class="outer dragndrop-limiter">
			<div class="inner dragndrop dragndrop-limiter" style="left:100px;top:100px;width:300px;height:200px; background:#00F">
				Content A
				
				<p>
					sub div
				</p>
				
				<div class="inner dragndrop" style="left:100px;top:50px; background:#0F0">
					Sub-content A
				</div>
			</div>
			<div class="inner dragndrop" style="left:400px;top:200px; background:#F00">
				Content B
			</div>
		</div>
	</body>
</html>
```
