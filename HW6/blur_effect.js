const webCam = document.querySelector('.webcamera')
const userVideo = document.querySelector('.user-video')
const videoCtx = userVideo.getContext('2d')
const BlurEff = document.querySelector('.blur-effect')
const blurCtx = BlurEff.getContext('2d')
const faceSave= new FaceDetector();
async function getVideo() {
    const live = await navigator.mediaDevices.getUserMedia({
        //audio:true,
        video:{
            width: 250,
            height: 180
        }
    });
    userVideo.height=700
    videoCtx.filter='blur(1000px)'
    webCam.srcObject=live;
    webCam.play()
}
async function blurEffect(){
    const face = await faceSave.detect(userVideo)
    console.log(face);
}
getVideo().then(blurEffect)