import Link from 'next/link'
const Banner=(props)=>{

    return(

        <div id='Banner'>
            
            <p id='title'>
                john mayer - live in toronto
            </p>

            <p id='details'>
                february 27<br></br>
                scotiabank arena<br></br>
                7:30 pm
            </p>

            <canvas id='myCanvas'></canvas>
            <div id='continer'>
                <Link href='/tickets'><a>Ticket Details</a></Link>
            </div>
            
        
            <style jsx>
                {`
                position:absolute;
                top:0px;
                left:0px;
                right:0px;
                bottom:0px;
                background-color:black

                #title{
                    position:relative;
                    top:0vh;
                    // color:whitesmoke;
                    font-size:6vw;
                    text-align:center;
                    font-family:Verdana;
                    font-variant:small-caps;
                    z-index:2;
                    background-color:rgba(255,0,0,0);

                    animation: flash 4s linear infinite;
                }

                @keyframes flash{
                    0%{
                        color:rgba(250,250,250,1)
                    }
                    50%{
                        color:rgba(250,0,0,.9)
                    }
                    100%{
                        color:rgba(250,250,250,1)
                    }
                }
                @keyframes flash{
                    0%{
                        color:rgba(250,250,250,1)
                    }
                    50%{
                        color:rgba(250,0,0,.9)
                    }
                    100%{
                        color:rgba(250,250,250,1)
                    }
                }

                #details{
                    position:absolute;
                    top:10vh;
                    left:5px;
                    color:whitesmoke;
                    font-size:6vw;
                    font-family:Verdana;
                    font-variant:small-caps;
                    z-index:2;
                    background-color:rgba(0,0,0,0)

                }
                #myCanvas{
                    position:relative;
                    background-color:rgba(0,0,0,0);
                    width:100%;
                    height:100%;
                    z-index:2;
                }

                a{
                    position:relative;
                    color:rgba(255,255,255,1);
                    font-size:30;
                    font-family:Verdana;
                    text-align:right;
                    left:65%;
                    top:90%;
                    z-index:3;
                    background-color:rgba(255,0,0,0);
                    cursor:pointer;
                    text-decoration:none;

                }
                a:hover{
                    text-decoration:underline
                }
                a:active{
                    color:red;
                    text-decoration:underline;
                }

                `}
            </style>
        </div>
    )
}

export default Banner