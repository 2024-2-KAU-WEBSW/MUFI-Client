import React, { useState } from 'react';
import * as S from './Gallery.style';
import GalleryPhoto from '../../components/GalleryPhoto/GalleryPhoto';

function Gallery() {
    const photos = Array.from({ length: 10 }, (_, index) => ({
        id: index + 1,
        image: `catphoto_${index + 1}`
    }));

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : photos.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < photos.length - 1 ? prevIndex + 1 : 0));
    };

    // 현재 인덱스부터 다섯 개의 사진을 표시하고 첫 번째와 다섯 번째 위치의 투명도를 설정합니다.
    const displayedPhotos = [
        photos[(currentIndex) % photos.length],
        photos[(currentIndex + 1) % photos.length],
        photos[(currentIndex + 2) % photos.length],
        photos[(currentIndex + 3) % photos.length],
        photos[(currentIndex + 4) % photos.length],
    ];

    return (
        <S.GalleryWrapper>
            <S.PhotoContainerWrapper>
                <S.ArrowButton onClick={handlePrev} style={{ left: 0 }}>&lt;</S.ArrowButton>

                <S.PhotoContainer style={{ transform: `translateX(-${currentIndex * 30}rem)` }}>
                    {displayedPhotos.map((photo, index) => (
                        <GalleryPhoto
                            key={photo.id}
                            image={photo.image}
                            opacity={index === 0 || index === 4 ? 0.5 : 1} // 첫 번째와 다섯 번째 자리는 항상 투명도 50%
                        />
                    ))}
                </S.PhotoContainer>

                <S.ArrowButton onClick={handleNext} style={{ right: 0 }}>&gt;</S.ArrowButton>
            </S.PhotoContainerWrapper>

            <S.SlideMenu>
                {photos.map((photo) => (
                    <S.SlideMenuItem key={photo.id} isActive={photo.id === displayedPhotos[2].id}>
                        {photo.id}
                    </S.SlideMenuItem>
                ))}
            </S.SlideMenu>
        </S.GalleryWrapper>
    );
}

export default Gallery;
