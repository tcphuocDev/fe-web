// @ts-nocheck
import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Button from './Button'
import numberWithCommas from 'utils/numberWithCommas'

const ProductView = props => {
  const product = props.product

  const [previewImg , setPreViewImg] = useState(product.image01)

  const [descriptionExpand, setDescriptionExpand] = useState(false)

  const [color, setColor] = useState(undefined)
  const [size, setSize ]= useState(undefined)

  const [quantity,setQuantity] = useState(1)


  const updateQuantity = (type) => {
    if(type === 'plus') {
      setQuantity(quantity + 1);
    }
    else{
      setQuantity(quantity -1 < 1 ? 1 : quantity -1)
    }
  }

  useEffect(() => {
    setPreViewImg(product.image01)
    setQuantity(1)
    setColor(undefined)
    setSize(undefined)
  }, [product])

  const check = () => {
    if(color === undefined){
      alert('Vui lòng chọn màu sắc!')
      return false
    }
    if(size === undefined){
      alert('Vui lòng chọn kích cỡ!')
      return false
    }

    return true

  }
  
  const addToCart = () => {
    if(check()) console.log({color, size , quantity});
  }


  const goToCart = () => {
    console.log('1111111111111111111111');
    if(check()) props.history.push('/cart')
  }
  return (
    <div className='product'>
      <div className="product__images">
        <div className="product__images__list">
          <div className="product__images__list__item" onClick={() => setPreViewImg(product.image01)}>
            <img src={product.image01} alt="" />
          </div>
          <div className="product__images__list__item" onClick={() => setPreViewImg(product.image02)}>
            <img src={product.image02} alt="" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div className={`product-description ${descriptionExpand ? 'expand' : '' }`}>
          <div className="product-description__title">
            Chi tiết sản phẩm
          </div>
          <div className="product-description__content" dangerouslySetInnerHTML={{__html:product.description}}></div>
          <div className="product-description__toggle">
            <Button size='sm' onClick={() => setDescriptionExpand(!descriptionExpand)} >
             {
               descriptionExpand ? 'Thu gọn' :'Xem thêm'
             }
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {numberWithCommas(product.price)}
          </span>
          <div className="product__info__item">
            <div className="product__info__item__title">
              Màu sắc
            </div>
            <div className="product__info__item__list">
              {
                product.colors.map((item,index) => (
                  <div 
                    key={index} 
                    className={`product__info__item__list__item ${color === item ? 'active' : '' }`}
                    onClick={() => setColor(item)}
                    >
                     <div className={`circle bg-${item}`}></div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="product__info__item">
            <div className="product__info__item__title">
             Kích cỡ
            </div>
            <div className="product__info__item__list">
              {
                product.size.map((item,index) => (
                  <div 
                    key={index} 
                    className={`product__info__item__list__item ${size === item ? 'active' : '' }`}
                    onClick={() => setSize(item)}
                    >
                    <div className="product__info__item__list__item__size">
                      {item}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="product__info__item">
            <div className="product__info__item__title">
             Số lượng
            </div>
            <div className="product__info__item__quantity">
              <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>
                <i className="bx bx-minus"></i>
              </div>
              <div className="product__info__item__quantity__input">
                {quantity}
              </div>
              <div className="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                <i className="bx bx-plus"></i>
              </div>

            </div>
          </div>
          <div className="product__info__item">
            <Button size='sm' onClick={() => addToCart()}>
              thêm vào giỏ
            </Button>
            <Button size='sm' onClick={() => goToCart()}>
              mua ngay
            </Button>
          </div>
        </div>
      </div>
      <div className={`product-description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product-description__title">
                    Chi tiết sản phẩm
                </div>
                <div className="product-description__content" dangerouslySetInnerHTML={{__html: product.description}}></div>
                <div className="product-description__toggle">
                    <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                        {
                            descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                        }
                    </Button>
                </div>
        </div>
    </div>
  )
}

ProductView.propTypes = {
  product:PropTypes.object.isRequired
}

export default withRouter(ProductView)