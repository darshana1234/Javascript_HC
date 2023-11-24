(function chai()
{
    //named iife
    console.log('DB connected');

})();
//if we want to execute two iife use semicolon
( (name) =>{
    console.log(`DB connected to ${name}`);
}

)('darshana')