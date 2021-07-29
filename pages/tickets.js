
export default function Home() {



  return (
    <div >

        <table>
            <tr>
                <img src='/JM.jpg' id='pic1'></img>
            </tr>
            <tr>
                <img src='/tickets.jpg' id='pic2'></img>
            </tr>
        </table>




      <style jsx>
        {`
        background-color:white;
        table{
            position:absolute;
            left:0;
            width:100%;
            top:0;
        }
        #pic1{
            left:0px;
            top:0px;
            width:100%

        }
        #pic2{
            left:0px;
            width:100%;
        }
        `}
      </style>
    </div>
    
  )
}
