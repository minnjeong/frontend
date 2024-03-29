import React from 'react';
import Layout from '../components/common/Layout';
import { styled } from 'styled-components';
import Text from '../components/common/Text';
import Button from '../components/common/Button';
import InputBox from '../components/common/InputBox';

function Upload() {
  return (
    <Layout>
      <PostTitle>중고 물품 올리기</PostTitle>
      <Container>
        <CardPhoto>
          <img
            alt='갤럭시 Z 폴드 3 5G'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkvUeuk0KkCuS7JtUDjekOuOjaV0DHYAl4A&usqp=CAU'
          />
        </CardPhoto>
        <UploadTitle>
          <Text fontSize={'25px'} fontWeight={'bold'} color={'#9e7979'}>
            글 제목
          </Text>
          <InputBox width={'270px'} height={'28px'} shadow={'1px 1px 3px 1px #9e7979'}/>
        </UploadTitle>
        <UploadPrice>
          <Text fontSize={'25px'} fontWeight={'bold'} color={'#9e7979'}>
            가격
          </Text>
          <InputBox width={'270px'} height={'28px'} shadow={'1px 1px 3px 1px #9e7979'}/>
        </UploadPrice>
        <UploadContent>
          <Text fontSize={'25px'} fontWeight={'bold'} color={'#9e7979'}>
            글 내용
          </Text>
          <InputBox width={'270px'} height={'28px'} shadow={'1px 1px 3px 1px #9e7979'}/>
        </UploadContent>
        <div style={{ width: '30%', margin: 'auto' }}>
          <Button width={'100%'} height={'45px'} bc={'#9e7979'}>
            <Text fontSize={'25px'} fontWeight={'bold'} color={'#ffffff'}>
              게시물 올리기
            </Text>
          </Button>
        </div>
      </Container>
    </Layout>
  );
}

export default Upload;

const PostTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 35px;
  font-weight: bold;
  color: #beb47d;
  padding: 70px;
`;

const Container = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  border-radius: 12px;
  box-shadow: 1px 1px 7px 1px rgba(190, 180, 125, 0.26);
  padding: 50px;
  background-color: white;
`;

const CardPhoto = styled.div`
  width: 60%;
  height: 400px;
  background-color: beige;
`;

const UploadTitle = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
`;

const UploadPrice = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

const UploadContent = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 50px;
  justify-content: space-between;
`;

// 컨테이너 아래 배경 채우기
// 인풋 컴포넌트 넣으면 레이아웃 무너짐....