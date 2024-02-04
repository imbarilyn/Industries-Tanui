import React from 'react'
import { useNavigate} from 'react-router-dom'


function Home() {
    const navigate = useNavigate()
    return (
        <div className='body_content'>
            <div className='hero_content'>
                <div className='hero_content_right'>
                    <h1>Tanui Industries Inventory </h1>
                    <p>Add on the products</p>
                </div>
                <div>
                    <button className='expired_contracts' onClick={() => navigate('/create')}>Add Products</button>
                </div>
            </div>
        </div>
    )
  return (
    <div className='body_content'>
        
    <div className='hero_content'>
        <div className='hero_content_right'>
            <h1>Tanui Industries Inventory </h1>
            <p>Add on the products</p>
        </div>
        <div>
            <button className='expired_contracts'>Add Products</button>
        </div>
    </div>
    
    <div className='footer_copyright'>
        <small>&copy;Tanui Industries. All rights reserved.</small>
    </div>
</div>
)
  
}

export default Home