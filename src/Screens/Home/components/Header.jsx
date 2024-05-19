import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between items-center
    shadow-lg p-4 border rounded-lg'>
      <button className='btn btn-primary btn-sm md:btn-md'>+ New Code Tip</button>
      <h2 className='font-bold text-sm md:text-2xl'>Code Tips</h2>
      <div className='items-center'>
        {/* Icon add here */}
        <label class="cursor-pointer grid place-items-center">
          <input type="checkbox" value="synthwave" class="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
          <svg class="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
          <svg class="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
      </div>
    </div>
  )
}

export default Header