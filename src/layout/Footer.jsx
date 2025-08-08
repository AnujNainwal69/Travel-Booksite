import { AiOutlinePhone } from 'react-icons/ai'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'


const Footer = () => {
  return (
    <footer>
      <div className='bg-[#2C3E50]'>
        <div className='bg-[#2C3E50] text-white md:grid grid-cols-3 gap-25 p-2 m-4'>
          
          <div className='py-2 text-justify leading-8'>
          <h3 className='text-2xl font-semibold'>PeaceHub</h3>
          <p>We are one of the leading travel agency in Dehradun, Uttarakhand. We believe that time to time services and well-managed packages are the only way to earn customer satisfaction.</p>
          </div>


          <div className='py-2  leading-6'>
          <h3 className='text-2xl font-semibold'>Contact Us :</h3>
            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/40">
                  <MdEmail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-black">Email</h4>
                  <a
                    href="mailto:anainwal7@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    anainwal7@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <AiOutlinePhone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-black">Phone</h4>
                  <a
                    href="tel:+918273005924"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    8273005924
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <IoLocationOutline className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-black">Location</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='py-2 leading-8'>
           <h3 className='text-2xl font-semibold'>Connect with us:</h3>
          <div className='flex gap-4 text-3xl px-6 py-3 '>
          <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a> 

          <a href="https://www.facebook.com/" target='_blank'> <FaFacebook /></a>
           
          </div>
          </div>
          
        </div>
        <hr className=' text-white' />
        <div className='bg-[#2C3E50] text-white text-center p-2'>
          <p>© 2025 PeaceHub. All rights reserved.</p>
        </div>
        </div>
    

    
    </footer>
  )
}

export default Footer