import Image from 'next/image'
const Photo=()=>{



    return(
        <div>
            <div id='container'>
                <Image 
                    src={'/inked.jpg'} 
                    width={804}
                    height={1199}
                    priority={true}
                    alt="pic of John Maer"
                />
            </div>

            <style jsx>
            {`
            #container{
                position:absolute;
                display:block;
                width:100%;
                height:auto;
                bottom:0px;
                right:0px;
            }


            `}
        </style>
    </div>
    )
}

export default Photo