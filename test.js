function setup() {
    setTimeout(() => {
        try { 
            createCanvas(1, 1);
            noCanvas();
            console.log("p5.js loaded and noCanvas called successfully");
        } catch (error) {
            console.error("Error with noCanvas:", error);
        }
    }, 100);

    // Delay for 1 second, then create a paragraph with "hello"
    delayES8(1000)
        .then(() => createP('hello'))
        .catch((err) => console.error(err));
}

async function delayES8(time) {
    
    //returns a promise
    await delay(time);
    
    //await someThingElse();
    //let val = await somethingElse();
    
    //return val;

}

function delay(time) {
    return new Promise((resolve, reject) => {
        if (isNaN(time)) {

            reject(new Error('delay requres a valid number')) 

                
            } else {
             setTimeout(resolve, time);
    }
});
}
console.log("hell0")