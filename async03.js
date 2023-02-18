function sleep(ms){
    return new Promise((resolve)=>{setTimeout(resolve, ms)})
}

async function process(){
    console.log('1-Hello, This is async test! ');
    await sleep(3000);
    console.log('2-this code stats in 3minutes!')
}

process().then(()=>{console.log('3-async text is done')}); 