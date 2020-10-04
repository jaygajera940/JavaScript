<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript">
		function sort()
		{let s=prompt('enter String:')
			let temp;
			let x=s.split("");
			for(let i=0;i<s.length;i++)
			{
				for(let j=0;j<s.length-1;j++)
				{
					if(x[j]>x[j+1])
					{
						temp=x[j];
						x[j]=x[j+1];
						x[j+1]=temp;
					}
				}
			}
			alert(x.join(""));
		}
	</script>
</head>
<body onload="sort()">
</body>
</html>
