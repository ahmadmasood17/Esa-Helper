

interface FooterHead{
    text:string;
}

const FooterHeading: React.FC<FooterHead> = ({text}) => {
  return (
     <h4 className='mb-[6px] text-[#010101]'>{text}</h4>
  )
}

export default FooterHeading