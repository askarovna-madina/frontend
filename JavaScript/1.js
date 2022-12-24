function vowelsAndConsonants(myStr) {
    for (let i=0; i<myStr.length; i++){
        if (myStr[i]=='i' || myStr[i]=='a' || myStr[i]=='e' || myStr=='o' || myStr=='u') {
            console.log(myStr[i])
        }
    }
    for (let i=0; i<myStr.length; i++){
        if(myStr[i]!='i' || myStr[i]!='a' || myStr[i]!='e' || myStr!='o' || myStr!='u') {
            console.log(myStr[i])
        }
    }
}
function main() {
    const s = 'javascript';
    vowelsAndConsonants(s);
    len=s.length
    console.log(len)
}
