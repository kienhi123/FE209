
import Link from 'next/link'
import style from './header.module.scss';

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
   
        <ul className='menu'>
            <li><Link href="/"><a className='menu__item'>Trang Chủ</a></Link></li>
            <li><Link href="/about"><a className='menu__item'>Shop</a></Link></li>
            <li><Link href="/products"><a className='menu__item'>Product</a></Link></li>
            <li><Link href="/contact"><a className='menu__item'>Admin</a></Link></li>
        </ul>
        <img className='pt-4' src="https://pozaatea.vn/wp-content/uploads/2021/08/FFDA7F43-61FF-469F-ADC3-6BD3A353DC04.jpeg" alt="" width={1500} />
    </div>
  )
}

export default Header