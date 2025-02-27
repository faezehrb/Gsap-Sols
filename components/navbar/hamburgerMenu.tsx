
'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [clicked, setClicked] = useState<boolean>(false)

  const handleClick = (event: any) => {
    event.preventDefault()
    setIsOpen(!isOpen)
    setClicked(true)

    setTimeout(() => {
      setClicked(false)
    }, 100)
  }

  return (
    <div className="inline-block text-left fixed left-6 top-6 z-50">
      <div className='relative'>
        <button
          type="button"
          className="inline-flex justify-center items-center backdrop-blur-2xl rounded-full w-[40px] h-[40px] pt-1 pb-1 pl-1 pr-1 text-white-800 transition hover:scale-110"
          aria-expanded = {isOpen ? 'true' : 'false'}
          onClick={(handleClick)}
        >
          <svg
            className={`${isOpen ? 'hidden' : 'block'} text-white`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="35px" width="35px"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            className={`${isOpen ? 'block' : 'hidden'} text-white`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="35px" width="35px"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {/* Dropdown menu */}
      <div
        className={`${ isOpen ? 'block' : 'hidden'} relative -top-10`}
      >
            <ul className="p-0 m-0">
              <li className = {`${clicked ? 'w-0 h-0' : 'w-[35px] h-[35px]'} cursor-pointer absolute justify-center items-center place-items-center  top-0 left-24 transform transition-all hover:scale-110 backdrop-blur-2xl rounded-full duration-100`}>
                <Link href="https://github.com/faezehrb" target='_blank' passHref>
                  <div className="flex justify-center items-center text-white-800" role="menuitem">
                  <svg viewBox="0 0 192 192" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"></path></g></svg>
                  </div>
                </Link>
              </li>
              <li className = {`${clicked ? 'w-0 h-0' : 'w-[35px] h-[35px]'} cursor-pointer absolute justify-center items-center place-items-center top-[4.3rem] left-20 transform transition-all hover:scale-110 backdrop-blur-2xl rounded-full duration-150`}>
                <Link href="#" passHref>
                  <div className="flex justify-center items-center  text-white-800" role="menuitem">
                    <svg viewBox="0 -1.5 160 160" width="25px" height="25px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0)"> <path d="M159.353 104.09C158.984 94.5839 158.88 84.9967 158.778 75.7253C158.755 73.6185 158.733 71.5129 158.704 69.3503C158.543 67.0013 158.556 64.6441 158.74 62.2971C159.072 55.8059 159.45 48.4482 153.408 44.7163C134.553 32.2931 117.977 21.9277 102.739 13.0311L101.004 11.9946C96.1264 9.08116 91.0824 6.06876 86.1514 3.08439C81.9652 0.553553 81.198 0.409007 77.2252 3.40519C72.8113 6.72757 68.3935 10.0659 63.973 13.4198C45.0594 27.7424 25.5018 42.5513 5.60819 56.0161C2.97759 57.8414 1.76931 60.051 1.80541 62.9547C1.76799 66.2154 1.81789 69.5446 1.86646 72.7639C1.95375 78.5961 2.04437 84.6266 1.61184 90.3833L1.60655 90.4542L1.61633 90.5244C1.91102 92.5919 1.76015 96.3501 1.58556 100.702C1.18716 110.65 0.732355 121.926 4.88631 123.907C15.3221 128.383 36.0281 137.469 52.6676 144.77C64.7442 150.068 74.2802 154.253 76.7552 155.302C77.8408 155.859 79.0426 156.15 80.262 156.152C83.2608 156.152 86.0798 154.431 88.5765 152.707C108.568 140.044 131.227 125.69 153.431 114.331C157.955 112.021 159.559 109.244 159.353 104.09ZM150.729 102.843C147.86 101.839 135.82 92.8374 129.171 87.8663C123.264 83.4491 121.205 81.9106 120.327 81.5063L151.416 59.5031C152.327 62.5157 151.544 80.466 151.114 90.3216C150.764 98.3558 150.642 101.527 150.729 102.847V102.843ZM85.2751 116.962C85.3795 115.422 85.3644 113.876 85.2305 112.339C85.0277 108.968 84.817 105.484 87.0026 103.179C96.1618 96.8896 103.888 91.6612 111.789 86.6074C112.084 86.463 112.362 86.2851 112.618 86.0777C112.86 85.8565 113.149 85.6938 113.464 85.6012C114.079 86.2799 116.179 87.7868 123.582 92.9299C131.168 98.2023 143.646 106.872 145.175 109.094C143.92 109.781 140.035 112.158 126.659 120.416C111.573 129.73 89.1823 143.552 85.3756 145.368C85.031 142.907 85.1787 132.647 85.2712 126.315C85.3677 119.27 85.3683 117.535 85.2751 116.965V116.962ZM148.49 51.6172C148.443 51.6587 148.387 51.6893 148.328 51.7066L148.161 51.7969C142.179 56.2968 135.908 60.5738 129.843 64.7093C125.3 67.8073 120.601 71.0102 116.029 74.3043C113.994 75.7293 112.654 75.7194 110.722 74.2636C103.966 69.1875 96.5996 63.8672 87.5388 57.5184C85.3729 56.0016 84.5164 54.2827 84.4731 51.3922C84.4075 44.7363 84.1679 38.0632 83.9388 31.6101C83.7026 24.9542 83.4584 18.0723 83.4006 11.2412C83.4289 10.8933 83.4256 10.5437 83.3914 10.1964C83.3324 9.69917 83.3383 9.19628 83.4079 8.70042C83.4472 8.69839 83.4866 8.70396 83.524 8.71643C92.0597 14.3183 101.004 19.8787 108.903 24.7881C110.084 25.8186 114.506 28.4832 120.083 31.8457C126.024 35.4273 133.418 39.8853 139.147 43.7353C148.315 49.899 148.533 51.3966 148.493 51.6204L148.49 51.6172ZM77.0834 143.097C77.1044 144.153 77.1398 145.919 76.6541 146.383C76.5951 146.441 76.5157 146.475 76.4323 146.476C69.9162 143.746 63.3095 141.064 56.9194 138.469C42.5521 132.635 27.7025 126.606 13.2933 119.791C15.7217 117.144 28.3412 106.001 36.9103 98.4353C45.3626 90.9727 47.392 89.152 47.9282 88.5705C48.681 88.732 50.8818 90.0197 51.9739 90.6603C52.5606 91.0383 53.175 91.3717 53.8117 91.6579C55.4578 92.8157 58.6548 94.3896 62.3441 96.2076C68.6363 99.3062 78.1453 103.99 78.0705 106.352C77.8257 117.793 77.4903 129.431 77.1667 140.687L77.1477 141.343C77.0676 141.924 77.046 142.512 77.0834 143.097ZM40.406 83.7812C39.8934 84.1691 38.0745 85.8618 29.6892 93.7575C22.3671 100.654 11.6229 110.774 9.05988 112.902C8.29065 109.313 8.10045 90.869 7.98296 79.5603C7.85957 67.6294 7.78993 64.7723 7.61469 63.9322H7.62322L40.404 83.7766L40.406 83.7812ZM12.6823 58.9609L12.6999 58.9504C12.6959 58.9561 12.6911 58.9612 12.6854 58.9654L12.6823 58.9609ZM78.018 20.2908C77.8382 22.1524 77.8034 24.0251 77.9123 25.8921C77.8027 33.0462 77.7811 38.4483 77.7673 42.3922C77.7384 49.9545 77.7266 53.0843 77.111 53.7026C75.5928 55.2207 72.8861 57.2991 69.1404 60.1758C63.9318 64.1795 56.8013 69.6522 48.2525 77.1811C48.0188 77.3274 47.8033 77.5014 47.6106 77.6989C47.3953 77.9155 47.1569 78.1078 46.8998 78.2732C46.7541 78.1918 13.1042 59.1985 12.7117 58.9484C13.5184 58.489 16.7056 56.2161 33.1095 44.3606C49.4273 32.5669 73.6232 15.0804 77.7404 12.6539C78.3915 14.9622 78.1992 17.6668 78.0193 20.2908H78.018ZM72.4536 66.9468C77.9242 62.3437 79.5479 60.9439 80.0231 60.3361L106.221 80.0381C104.401 81.3455 102.568 82.6635 100.723 83.9912C95.0552 88.071 89.1935 92.2887 83.6448 96.1814C83.1991 96.4472 82.6898 96.587 82.1707 96.585C76.4953 94.427 70.7714 91.3448 65.2372 88.3638C61.8282 86.526 58.3062 84.6318 54.7915 82.947C56.0287 80.7653 66.6378 71.8405 72.4549 66.9468H72.4536Z" fill="#ffffff"></path> </g> <defs> <clipPath id="clip0"> <rect width="158.834" height="155.552" fill="white" transform="translate(0.883301 0.641602)"></rect> </clipPath> </defs> </g>
                    </svg>
                  </div>
                </Link>
              </li>
              <li className = {`${clicked ? 'w-0 h-0' : 'w-[35px] h-[35px]'} cursor-pointer absolute justify-center items-center place-items-center top-24 left-1 transform transition-all hover:scale-110 backdrop-blur-2xl rounded-full duration-200`}>
                <Link href="https://www.linkedin.com/in/faezeh-roohbakhsh-bb0634127/" target='_blank' passHref>
                  <div className="flex justify-center items-center text-white-800" role="menuitem">
                  <svg fill="#ffffff" viewBox="0 0 1920 1920" width="24px" height="24px" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z" fillRule="evenodd"></path> </g></svg>
                  </div>
                </Link>
              </li>
            </ul>
      </div>
    </div>
  )
}

export default HamburgerMenu
