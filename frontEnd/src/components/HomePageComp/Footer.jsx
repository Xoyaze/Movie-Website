import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='h-auto w-full relative py-6 px-4'>

        <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent absolute top-0 left-0'></div>


        <div className="h-auto w-full flex justify-around items-center mt-4">
          <div>
            <h1 className='text-xl font-bold mb-2'>Technologies Used</h1>
            <ul className='text-sm'>
              <a href="https://react.dev/" target='_blank' className='hover:text-gray-200'>
                <li>React</li>
              </a>
              <a href="https://www.django-rest-framework.org/" target='_blank' className='hover:text-gray-200'>
                <li>Django DRF</li>
              </a>
              <a href="https://django-rest-framework-simplejwt.readthedocs.io/en/latest/" target='_blank' className='hover:text-gray-200'>
                <li>Django DRF Simple JWT</li>
              </a>
              <a href="https://developer.themoviedb.org/reference/intro/getting-started" target='_blank' className='hover:text-gray-200'>
                <li>TMDB API</li>
              </a>
              <a href="https://www.npmjs.com/package/react-toastify" target='_blank' className='hover:text-gray-200'>
                <li>Toastify</li>
              </a>
              <a href="https://reactrouter.com/en/main" target='_blank' className='hover:text-gray-200'>
                <li>React Router DOM</li>
              </a>
              <a href="https://gsap.com/" target='_blank' className='hover:text-gray-200'>
               <li>GSAP</li>
              </a>
            </ul>
          </div>
          <div>
            <h1 className='text-xl font-bold mb-2'>Social Links</h1>
            <ul className='text-sm'>
              <a href="" target='_blank' className='hover:text-yellow-500'>
                <li>
                  <FontAwesomeIcon icon={faLink} />
                  <span className='ml-1'>Manseez Bahadur Pradhan</span>
                </li>
              </a>
              <a href="" target='_blank' className='hover:text-yellow-500'>
                <li>
                  <FontAwesomeIcon icon={faLink} />
                  <span className='ml-1'>Riju Phaiju</span>
                </li>
              </a>
              <a href="" target='_blank' className='hover:text-yellow-500'>
                <li>
                  <FontAwesomeIcon icon={faLink} />
                  <span className='ml-1'>Salon Raut</span>
                </li>
              </a>
              <a href="" target='_blank' className='hover:text-yellow-500'>
                <li>
                  <FontAwesomeIcon icon={faLink} />
                  <span className='ml-1'>Pranaya Basukala</span>
                </li>
              </a>
            </ul>
          </div>
          <div>
            <h1 className='text-xl font-bold mb-2'>References</h1>
            <ul className='text-sm'>
              <a href="https://react.dev/reference/react" target='_blank' className='hover:text-gray-200'>
                <li>React Documentation</li>
              </a>
              <a href="https://www.netflix.com/np/" target='_blank' className='hover:text-gray-200'>
                <li>Netflix</li>
              </a>
              <a href="https://gsap.com/docs/v3/" target='_blank' className='hover:text-gray-200'>
                <li>GSAP Documentation</li>
              </a>
              <a href="https://developer.themoviedb.org/reference/intro/getting-started" target='_blank' className='hover:text-gray-200'>
                <li>TMDB API References</li>
              </a>
              <a href="https://fkhadra.github.io/react-toastify/introduction/" target='_blank' className='hover:text-gray-200'>
                <li>Toastify Documentation</li>
              </a>
              <a href="https://reactrouter.com/en/main" target='_blank' className='hover:text-gray-200'>
                <li>React-Router-Dom Documentation</li>
              </a>
            </ul>
          </div>


        </div>


        <div className='h-auto w-full flex flex-col justify-center items-center gap-12 mt-24'>
            <h1 className='text-3xl font-bold'>Developed By</h1>
            <div className='h-auto w-full flex justify-around font-playwrite'>
                <h3 className='hover:text-yellow-400 transition-hover duration-150 cursor-default '>Pranaya Basukala</h3>
                <h3 className='hover:text-yellow-400 transition-hover duration-150 cursor-default '>Manseez Bahadur Pradhan</h3>
                <h3 className='hover:text-yellow-400 transition-hover duration-150 cursor-default '>Riju Phaiju</h3>
                <h3 className='hover:text-yellow-400 transition-hover duration-150 cursor-default '>Salon Raut</h3>
            </div>
        </div>
        

    </div>
  )
}

export default Footer
