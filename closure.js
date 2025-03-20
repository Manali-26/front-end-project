const outer=()=>{
    let a=9;
    console.log("outer func");
    const inner=()=>{
        let b=0;
        console.log("inner func",a,b);// a ki value ko pehele apne fun mai dekhege if not then it will go to outter scope
    }
    inner();
}
outer();// outer func


