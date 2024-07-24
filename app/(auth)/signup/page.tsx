import React from 'react'
import '@/components/css/form.css'
import LeftSection from '@/components/forms/LeftSection'
import Form from '@/components/forms/Form'

export default function page() {
  return (
    <>
        <div className="form-div">
            <LeftSection text="Create Account" small='Lorem ipsum dolor sit amet' />
            <Form page='Create Account' />
        </div>
    </>
  )
}
