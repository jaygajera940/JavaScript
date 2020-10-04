<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript">
		function longestword()
		{let s=prompt('enter String:')
			let x=s.split(" ");
			let temp;
			let max=0;
			for(let i=0;i<x.length;i++)
			{
				if(x[i].length>max)
				{
					max=x[i].length;
					temp=i;
				}
			}
			
			alert(x[temp]);
			
		}
	</script>
</head>
<body onload="longestword()">
</body>
</html>
