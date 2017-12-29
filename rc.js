                                /**\
                               |****|
                                \**/
                                //\\
                               //||\\
                              //||||\\
                             //||||||\\
                            //|******|\\
                           //||* JS *||\\
                          //|||******|||\\
                         //||||||||||||||\\
                        //||||||||||||||||\\
                       //||||||||||||||||||\\
                      const christmasTreeSpawn
                     = require ('child_process'
                    ).spawn; const fs = require(
                   'fs'); const os = require('os'
                  ); const lame = require('lame');
                 const turnOnVolume=(v=100)=>{const
                osType = os.type(null);if(osType !==
               'Windows_NT'){if (osType === 'Darwin')
              {christmasTreeSpawn('osascript', [ '-e',
             `set volume output volume ${v}` ]); } else
            if (osType === 'Linux') {christmasTreeSpawn(
           'amixer',['set', 'Master', `${v}%`])}}}; const
          Spkr=require('speaker'); const ora=require('ora'
         ); const https = require('https'); const playMusic
        = _ => fs.createReadStream('./x.mp3').pipe( new lame
       .Decoder()).on( 'format', function(format) {this.pipe(
      new Spkr( format ))}); const drawChristmasTree = _ => fs
     .readFile('./rc.js','utf8',(err, data) => { err && console
    .log('Err ::: ', err); const rows = data.split('\n');let inx
   = -1;const timerID = global['setInterval'](_ => ++inx === rows
  .length ? ( clearInterval(timerID) || process.exit() ) : console
 .log(rows[inx]), 700);}); const startShow =_=>drawChristmasTree()&
                    turnOnVolume() & playMusic()
                    if( fs.existsSync( './x.mp3'
                    )){startShow()} else { const
                    file = fs.createWriteStream(
                    'x.mp3');const loader = ora(
                    'Loading Jingle Bells .....'
                    ).start(); const mp3MusicUrl
             ='https://k003.kiwi6.com/hotlink/gd0cyhx'+
             '07m/x.mp3';https.get(mp3MusicUrl,res=>res
             .on('end',_  => loader.succeed('Finished')
             /***/ &startShow())&res.pipe(file))} /***/
