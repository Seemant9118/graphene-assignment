import React from 'react'
import './Navbar.css'
import Line from '../../asserts/Line.png';


const Navbar = () => {
    const navbar = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        {
            name: 'Our Products', id: 'product', child: [
                { name: 'Product 1', id: 'p1' },
                { name: 'Product 2', id: 'p2' },
                { name: 'Product 3', id: 'p3' },
                { name: 'Product 4', id: 'p4' },
            ]
        },
        { name: 'Contact Us', id: 'contact' },
    ];

    return (
        <>
            <div className='shorter_nav'>
                <div className='left-side'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="12.9" viewBox="0 0 21 13" fill="none">
                            <path d="M20.3931 5.501L20.3932 5.5012C20.6678 6.04886 20.8073 6.65429 20.8001 7.2669H20.8001V7.26925V9.69234C20.8001 10.0677 20.6509 10.4277 20.3855 10.6932C20.1201 10.9586 19.7601 11.1077 19.3847 11.1077H19.2393H19.0991L19.0513 11.2395C18.8955 11.6687 18.6114 12.0395 18.2375 12.3015C17.8636 12.5635 17.4182 12.7041 16.9616 12.7041C16.505 12.7041 16.0595 12.5635 15.6857 12.3015C15.3118 12.0395 15.0277 11.6687 14.8719 11.2395L14.8241 11.1077H14.6839H6.31617H6.17654L6.12842 11.2388C5.96835 11.6749 5.67569 12.0499 5.29155 12.3111C4.90742 12.5723 4.45112 12.7066 3.98673 12.6951C3.52234 12.6837 3.07321 12.5271 2.70241 12.2472C2.33161 11.9674 2.05778 11.5785 1.91938 11.1351L1.8877 11.0335L1.7858 11.003C1.32921 10.8664 0.928621 10.5867 0.643098 10.2051C0.357666 9.82365 0.202338 9.36058 0.2 8.88416V2.42308C0.2 1.83349 0.434217 1.26804 0.851126 0.851127C1.26804 0.434217 1.83349 0.2 2.42308 0.2H12.9231C13.5127 0.2 14.0782 0.434217 14.4951 0.851126C14.912 1.26804 15.1462 1.83349 15.1462 2.42308V2.62308H15.3462L17.5754 2.62309L17.5759 2.62308C17.9953 2.6222 18.4065 2.74003 18.7619 2.96295C19.1172 3.18586 19.4023 3.50478 19.584 3.88283L19.584 3.88284L19.5854 3.88561L20.3931 5.501ZM13.7308 9.89234H13.9308V9.69234V2.42308C13.9308 2.15583 13.8246 1.89952 13.6357 1.71054C13.4467 1.52156 13.1904 1.41539 12.9231 1.41539H2.42308C2.15583 1.41539 1.89952 1.52156 1.71054 1.71054C1.52156 1.89952 1.41539 2.15583 1.41539 2.42308L1.41539 8.88464L1.41539 8.88547C1.41594 9.0188 1.44295 9.15069 1.49484 9.2735C1.54674 9.39632 1.62249 9.50761 1.7177 9.60094L1.91622 9.79552L2.03762 9.54545C2.22852 9.15222 2.53111 8.82399 2.90756 8.60181C3.28401 8.37964 3.71761 8.27337 4.15413 8.2963C4.59065 8.31924 5.01072 8.47035 5.36181 8.73075C5.71291 8.99115 5.97945 9.34928 6.12809 9.76035L6.17582 9.89234H6.31617H13.7308ZM19.3847 9.89234H19.5847L17.5754 4.03847V3.83847H17.5748H15.3462H15.1462V4.03847V6.46156V8.70695V9.15902L15.4807 8.85495C15.8863 8.48627 16.4138 8.28044 16.9619 8.27695C17.4202 8.27842 17.867 8.42153 18.2408 8.68669C18.615 8.95202 18.8978 9.32658 19.0507 9.759L19.0979 9.89234H19.2393H19.3847ZM15.9733 10.3034L16.1694 10.3425L15.9733 10.3034C15.9344 10.4989 15.9543 10.7015 16.0306 10.8857C16.1069 11.0698 16.236 11.2272 16.4017 11.3379C16.5675 11.4486 16.7623 11.5077 16.9616 11.5077C17.2288 11.5077 17.4852 11.4016 17.6741 11.2126C17.8631 11.0236 17.9693 10.7673 17.9693 10.5C17.9693 10.3007 17.9102 10.1059 17.7995 9.94019C17.6887 9.77447 17.5314 9.64532 17.3472 9.56905C17.1631 9.49278 16.9605 9.47282 16.765 9.5117C16.5695 9.55058 16.39 9.64656 16.249 9.78748C16.1081 9.92841 16.0121 10.108 15.9733 10.3034ZM3.47863 11.3379C3.64434 11.4486 3.83917 11.5077 4.03847 11.5077C4.30573 11.5077 4.56204 11.4016 4.75102 11.2126C4.94 11.0236 5.04617 10.7673 5.04617 10.5C5.04617 10.3007 4.98707 10.1059 4.87634 9.94019C4.76561 9.77447 4.60823 9.64532 4.4241 9.56905C4.23997 9.49278 4.03736 9.47282 3.84188 9.5117C3.64641 9.55058 3.46686 9.64656 3.32593 9.78749C3.185 9.92841 3.08902 10.108 3.05014 10.3034C3.01126 10.4989 3.03122 10.7015 3.10749 10.8857C3.18376 11.0698 3.31291 11.2272 3.47863 11.3379Z" fill="#626262" stroke="#191919" stroke-width="0.4" />
                        </svg>
                        <span> Free Delivery</span>
                    </span>
                    <span>|</span>
                    <span>
                        Return policy
                    </span>
                </div>
                <div className='right-side'>
                    <span>
                        Login
                    </span>
                    <span>
                        Follow Us
                    </span>
                    <span className='icons-list'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none">
                            <path d="M4.20514 4.24272L4.43836 2.87767H2.97945V1.99223C2.97945 1.61869 3.18288 1.25437 3.8363 1.25437H4.5V0.092233C4.5 0.092233 3.89795 0 3.3226 0C2.12055 0 1.33562 0.653932 1.33562 1.83728V2.87767H0V4.24272H1.33562V7.54282C1.60377 7.58063 1.87808 7.6 2.15753 7.6C2.43699 7.6 2.7113 7.58063 2.97945 7.54282V4.24272H4.20514Z" fill="#626262" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M0 0.888031C0 0.630625 0.0900927 0.41827 0.27027 0.250965C0.450448 0.0836525 0.684687 0 0.972973 0C1.25612 0 1.4852 0.0823629 1.66023 0.247104C1.84041 0.416988 1.9305 0.638347 1.9305 0.911197C1.9305 1.1583 1.84299 1.36422 1.66795 1.52896C1.48778 1.69884 1.25097 1.78378 0.957529 1.78378H0.949807C0.666664 1.78378 0.437583 1.69884 0.262548 1.52896C0.0875135 1.35907 0 1.14543 0 0.888031ZM0.100386 7.64479V2.48649H1.81467V7.64479H0.100386ZM2.76448 7.64479H4.47876V4.76448C4.47876 4.58429 4.49936 4.4453 4.54054 4.34749C4.61261 4.17246 4.72201 4.02445 4.86873 3.90347C5.01544 3.78249 5.19948 3.72201 5.42085 3.72201C5.99743 3.72201 6.28571 4.11068 6.28571 4.88803V7.64479H8V4.68726C8 3.92535 7.81982 3.34749 7.45946 2.95367C7.0991 2.55985 6.62291 2.36293 6.03089 2.36293C5.3668 2.36293 4.84942 2.64865 4.47876 3.22008V3.23552H4.47104L4.47876 3.22008V2.48649H2.76448C2.77477 2.65122 2.77992 3.16344 2.77992 4.02317C2.77992 4.88288 2.77477 6.09008 2.76448 7.64479Z" fill="#626262" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                            <path d="M6.81901 1.39439C6.8221 1.45599 6.8221 1.51479 6.8221 1.57639C6.82518 3.44399 5.25703 5.6 2.38928 5.6C1.54346 5.6 0.713079 5.3788 0 4.9644C0.123477 4.9784 0.246954 4.984 0.370431 4.984C1.07116 4.984 1.75337 4.7712 2.30593 4.3764C1.63916 4.3652 1.05264 3.9704 0.848903 3.39359C1.08351 3.43559 1.32429 3.42719 1.55272 3.36839C0.827295 3.23959 0.305605 2.65999 0.302518 1.98519C0.302518 1.97959 0.302518 1.97399 0.302518 1.96839C0.518603 2.07759 0.76247 2.13919 1.00942 2.14479C0.327214 1.73039 0.114216 0.904385 0.527864 0.257583C1.3212 1.14239 2.48806 1.67719 3.74135 1.73599C3.61478 1.24599 3.78765 0.730784 4.19204 0.383583C4.81868 -0.151218 5.8065 -0.123218 6.39919 0.445184C6.74801 0.383583 7.08448 0.265983 7.39009 0.100782C7.27279 0.428383 7.02892 0.705584 6.70479 0.881985C7.01348 0.848385 7.316 0.772785 7.6 0.660784C7.39009 0.946385 7.12461 1.19279 6.81901 1.39439Z" fill="#626262" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M7.97768 2.35068C7.95847 1.92474 7.88966 1.63331 7.79204 1.3787C7.68962 1.11609 7.55359 0.891913 7.33115 0.670937C7.1087 0.44996 6.88626 0.310649 6.62381 0.209768C6.36936 0.110488 6.0781 0.0432346 5.65241 0.0240192C5.22513 0.00480384 5.0891 0 4.00408 0C2.91747 0 2.78144 0.00480384 2.35575 0.0240192C1.93007 0.0432346 1.63881 0.11209 1.38436 0.209768C1.12031 0.31225 0.896261 0.448359 0.675417 0.670937C0.454573 0.893515 0.315345 1.11609 0.214525 1.3787C0.116905 1.63331 0.0480915 1.92474 0.0288876 2.35068C0.00968377 2.77822 0.00488281 2.91433 0.00488281 4C0.00488281 5.08727 0.00968377 5.22338 0.0288876 5.64932C0.0480915 6.07526 0.116905 6.36669 0.214525 6.6213C0.316945 6.88391 0.452972 7.10809 0.675417 7.32906C0.896261 7.55164 1.12031 7.68935 1.38276 7.79023C1.63721 7.88951 1.92847 7.95677 2.35415 7.97598C2.78144 7.9952 2.91747 8 4.00248 8C5.0891 8 5.22513 7.9952 5.65081 7.97598C6.0765 7.95677 6.36776 7.88791 6.62221 7.79023C6.88466 7.68775 7.1087 7.55164 7.32955 7.32906C7.55039 7.10648 7.68962 6.88391 7.79044 6.6213C7.88966 6.36669 7.95687 6.07526 7.97608 5.64932C7.99528 5.22178 8.00008 5.08567 8.00008 4C8.00008 2.91433 7.99688 2.77662 7.97768 2.35068ZM7.25913 5.61729C7.24153 6.00801 7.17592 6.22098 7.12151 6.36029C7.04949 6.54604 6.96147 6.68054 6.82065 6.82146C6.67982 6.96237 6.54699 7.04724 6.35975 7.1225C6.21893 7.17694 6.00608 7.24259 5.61721 7.26021C5.19632 7.27942 5.0699 7.28423 4.00088 7.28423C2.93187 7.28423 2.80544 7.27942 2.38456 7.26021C1.99408 7.24259 1.78124 7.17694 1.64201 7.1225C1.45637 7.05044 1.32195 6.96237 1.18112 6.82146C1.04029 6.68054 0.955473 6.54764 0.880258 6.36029C0.825847 6.21938 0.760234 6.0064 0.74263 5.61729C0.723427 5.19616 0.718626 5.06966 0.718626 4C0.718626 2.93034 0.723427 2.80384 0.74263 2.38271C0.760234 1.99199 0.825847 1.77902 0.880258 1.63971C0.952272 1.45396 1.04029 1.31946 1.18112 1.17854C1.32195 1.03763 1.45477 0.952762 1.64201 0.877502C1.78284 0.823058 1.99568 0.757406 2.38456 0.739792C2.80544 0.720576 2.93187 0.715773 4.00088 0.715773C5.0699 0.715773 5.19632 0.720576 5.61721 0.739792C6.00768 0.757406 6.22053 0.823058 6.35975 0.877502C6.54539 0.94956 6.67982 1.03763 6.82065 1.17854C6.96147 1.31946 7.04629 1.45236 7.12151 1.63971C7.17592 1.78062 7.24153 1.99359 7.25913 2.38271C7.27834 2.80384 7.28314 2.93034 7.28314 4C7.28314 5.06966 7.27674 5.19616 7.25913 5.61729Z" fill="#626262" />
                            <path d="M4.00089 1.94397C2.86466 1.94397 1.94608 2.86471 1.94608 4.00001C1.94608 5.13692 2.86626 6.05606 4.00089 6.05606C5.13551 6.05606 6.0557 5.13372 6.0557 4.00001C6.0557 2.86311 5.13711 1.94397 4.00089 1.94397ZM4.00089 5.33388C3.26474 5.33388 2.66782 4.7366 2.66782 4.00001C2.66782 3.26343 3.26474 2.66615 4.00089 2.66615C4.73703 2.66615 5.33395 3.26343 5.33395 4.00001C5.33395 4.7366 4.73703 5.33388 4.00089 5.33388Z" fill="#626262" />
                            <path d="M6.13571 2.34431C6.40085 2.34431 6.6158 2.12924 6.6158 1.86393C6.6158 1.59862 6.40085 1.38354 6.13571 1.38354C5.87056 1.38354 5.65561 1.59862 5.65561 1.86393C5.65561 2.12924 5.87056 2.34431 6.13571 2.34431Z" fill="#626262" />
                            <path d="M0 4C0 5.08727 0.00480096 5.22338 0.0240048 5.64932C0.0432086 6.07526 0.112022 6.36669 0.209642 6.6213C0.312062 6.88391 0.44809 7.10809 0.670534 7.32906C0.891378 7.55004 1.11542 7.68935 1.37788 7.79023C1.63233 7.88951 1.92358 7.95677 2.34927 7.97598C2.77656 7.9952 2.91258 8 3.9976 8C5.08422 8 5.22024 7.9952 5.64593 7.97598C6.07161 7.95677 6.36287 7.88791 6.61732 7.79023C6.87978 7.68775 7.10382 7.55164 7.32467 7.32906C7.54551 7.10809 7.68474 6.88391 7.78556 6.6213C7.88478 6.36669 7.95199 6.07526 7.97119 5.64932C7.9904 5.22178 7.9952 5.08567 7.9952 4C7.9952 2.91273 7.9904 2.77662 7.97119 2.35068C7.95199 1.92474 7.88318 1.63331 7.78556 1.3787C7.68314 1.11609 7.54711 0.891913 7.32467 0.670937C7.10542 0.448359 6.88138 0.310649 6.61892 0.209768C6.36447 0.110488 6.07321 0.0432346 5.64753 0.0240192C5.22024 0.00480384 5.08422 0 3.9992 0C2.91258 0 2.77656 0.00480384 2.35087 0.0240192C1.92518 0.0432346 1.63393 0.11209 1.37948 0.209768C1.11702 0.31225 0.892979 0.448359 0.672134 0.670937C0.45129 0.893515 0.312062 1.11609 0.211242 1.3787C0.112022 1.63331 0.0432086 1.92474 0.0240048 2.35068C0.00480096 2.77662 0 2.91273 0 4ZM0.721744 4C0.721744 2.93195 0.726545 2.80384 0.745749 2.38271C0.763353 1.99199 0.828966 1.77902 0.883377 1.63971C0.955391 1.45396 1.04341 1.31946 1.18424 1.17854C1.32507 1.03763 1.45789 0.952762 1.64513 0.877502C1.78596 0.823058 1.9988 0.757406 2.38768 0.739792C2.80856 0.720576 2.93499 0.715773 4.004 0.715773C5.07301 0.715773 5.19944 0.720576 5.62032 0.739792C6.0108 0.757406 6.22364 0.823058 6.36287 0.877502C6.54851 0.94956 6.68294 1.03763 6.82376 1.17854C6.96459 1.31946 7.04941 1.45236 7.12463 1.63971C7.17904 1.78062 7.24465 1.99359 7.26225 2.38271C7.28146 2.80384 7.28626 2.93034 7.28626 4C7.28626 5.06966 7.28146 5.19616 7.26225 5.61729C7.24465 6.00801 7.17904 6.22098 7.12463 6.36029C7.05261 6.54604 6.96459 6.68054 6.82376 6.82146C6.68294 6.96237 6.55011 7.04724 6.36287 7.1225C6.22204 7.17694 6.0092 7.24259 5.62032 7.26021C5.19944 7.27942 5.07301 7.28423 4.004 7.28423C2.93499 7.28423 2.80856 7.27942 2.38768 7.26021C1.9972 7.24259 1.78436 7.17694 1.64513 7.1225C1.45949 7.05044 1.32507 6.96237 1.18424 6.82146C1.04341 6.68054 0.958592 6.54764 0.883377 6.36029C0.828966 6.21938 0.763353 6.0064 0.745749 5.61729C0.724945 5.19616 0.721744 5.06805 0.721744 4Z" fill="#626262" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className='medium-nav'>
                <div className="headline">
                    <p>ShopKart</p>
                </div>
                <div className="pair-carts">
                    <span>WISHLIST(0)</span>
                    <span>BAG(0)</span>
                </div>
            </div>
            <div className='divider'>
                <img className="line" src={Line} alt='LineImage' />
            </div>
            <div className="navigation-nav">
                <ul className='navitems-group'>
                    {
                        navbar.map((navItem) => <li className="nav-items" key={navItem.id}>{navItem.name.toUpperCase()}</li>)
                    }
                </ul>
            </div>
        </>
    )
}

export default Navbar