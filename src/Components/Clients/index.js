import './Clients.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import imgSlide1 from '../../img/img1.jpeg'
import imgSlide2 from '../../img/img2.jpeg'
import imgSlide3 from '../../img/img3.jpeg'
import imgSlide4 from '../../img/img4.jpeg'

const Clients = () => {

    return (
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            style={{ marginLeft: 20, marginRight: 0 }}
            
            
        >
            <SwiperSlide>
                <div className="card">
                    <img src={imgSlide1} alt='client' />
                    <h3>Adriana Buiatti</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <img src={imgSlide2} alt='client' />
                    <h3>Adriana Buiatti</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <img src={imgSlide3} alt='client' />
                    <h3>Adriana Buiatti</h3>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card">
                    <img src={imgSlide4} alt='client' />
                    <h3>Adriana Buiatti</h3>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Clients
