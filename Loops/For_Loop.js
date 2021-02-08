console.clear()

var l1 = [1,2,3,4,5,6,7,8,9,10],i

for (i = 0; i<l1.length; i++)
{
    console.log(`Position: ${i} Value ${l1[i]}`)
}

// Break Keyword
console.clear()
for (i = 0; i<l1.length; i++)
{
    if(i>=4){
        break
    }
    console.log(`Position: ${i} Value ${l1[i]}`)
}

// Continue Keyword
// Printing even position
console.clear()
for (i = 0; i<l1.length; i++)
{
    if(i%2 !== 0){
        continue
    }
    console.log(`Position: ${i} Value ${l1[i]}`)
}

// Printing odd position
console.clear()
for (i = 0; i<l1.length; i++)
{
    if(i%2 == 0){
        continue
    }
    console.log(`Position: ${i} Value ${l1[i]}`)
}