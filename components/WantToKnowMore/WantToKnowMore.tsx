import React from 'react'
import BorderButton from '../Buttons/BorderButton'
import { GoArrowUpRight } from 'react-icons/go'

const WantToKnowMore = () => {
  return (
    <div className="py-4 py-lg-5 position-relative d-flex flex-column gap-4 bg-secondary">
      <div className='px-4 d-flex flex-column gap-4 py-4'>
        <div className='primary-text text-uppercase letter-spacing fw-semibold fs-15'>
          want to know more?
        </div>
        <div className='font-libre fs-42 pb-4 text-dark'>
          Learn more about our work
        </div>
        <div>
          <BorderButton
            text="CONNECT WITH US"
            style={{ color: "#000" }}
            sufixIconChildren={<GoArrowUpRight size={20} />}
            borderColorWhite={false}
          />
        </div>
      </div>
    </div>
  )
}

export default WantToKnowMore