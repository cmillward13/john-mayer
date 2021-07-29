import Image from 'next/image'
export default function Home() {



  return (
    <div >

        <table>
            <tr>
                <Image 
                    src={'/JM.jpg'}
                    id={'pic1'}
                    width={638}
                    height={517}
                    alt="pic of concert detials"
                 />
            </tr>
            <tr>
                <Image 
                    src={'/tickets.jpg'}
                    id={'pic2'}
                    width={686}
                    height={327}
                    alt="pic of tickets"
                 />
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
        `}
      </style>
    </div>
    
  )
}
