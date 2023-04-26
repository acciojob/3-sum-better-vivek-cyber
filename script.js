function threeSum(arr, target) {
	let close=Number.MAX_VALUE
for(let i=0;i<arr.length;i++)
	{
		for(let j=i+1;j<arr.length;j++)
			{
				for(let k=0;k<arr.length;k++)
					{
						if (Math.abs(target - close) >Math.abs(x - (arr[i] + arr[j] + arr[k])))
                    close= (arr[i] + arr[j] + arr[k]);
					}
			}
	}
	return close
}

module.exports = threeSum;
