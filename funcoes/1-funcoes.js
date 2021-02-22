function getName(){
    return 'Elizio Martins Cezarino';
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);