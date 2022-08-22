import Card from '../components/card'

const Schools = () => {
    return (
        <section>
            <div className='bg-[#eef4f2]'>
              <div className='p-20'>
                <h1 className='mx-10 text-3xl font-bold text-black'>Our Schools</h1>
                <div className='flex'>
                  <Card name="Chepkolon Green Highlands Academy" index={1} src={require('../assets/assembly.jpg')} description="A mixed day and boarding primary school located in Kericho"/>
                  <Card name="Chepkolon Premier School Mjini" index={1} src={require('../assets/assembly2.jpg')} description="Day school located next to Kericho town"/>
                  <Card name="Chepkolon High School" index={1} src={require('../assets/assembly.jpg')} description="A mixed boarding high school located in Kapsoit"/>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Schools