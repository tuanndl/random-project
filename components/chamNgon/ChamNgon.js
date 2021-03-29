import { Container } from '@material-ui/core';
import React, { Component } from 'react';
import './ChamNgon.scss';

class Index extends Component {
  render() {
    return (
      <Container maxWidth='sm' className='box--center'>
        <ul>
          <li className='quote'>
            Lúc này nếu ngủ bạn sẽ có một giấc mơ, nhưng lúc này nếu học bạn sẽ giải thích được ước
            mơ.
          </li>

          <li className='quote'>
            Ngày hôm nay nếu bạn lãng phí, đồng nghĩa với việc bạn bóp c.hết quá khứ và vứt bỏ ngày
            mai.
          </li>
          <li className='quote'>
            Khi nào bạn cảm thấy thời khắc đã muộn, khi đó thực sự là thời điểm hành động.{' '}
          </li>
          <li className='quote'>
            Sự khổ nhọc khi học chỉ là tạm thời, sự đau khổ vì không học đến nơi là mãi mãi.
          </li>
          <li className='quote'>Hạnh phúc có lẽ không có thứ lượt, nhưng thành công thì có.</li>
          <li className='quote'>
            Học tập phải chăng là nhiệm vụ cả đời, ngay cả người học cũng không thể chứng minh, còn
            có thể làm gì?
          </li>
          <li className='quote'>Hãy đón nhận sự khó nhọc không thể chối từ.</li>
          <li className='quote'>Nước bọt hiện tại sẽ là nước mắt của ngày mai.</li>
          <li className='quote'>Người đầu tư cho tương lai, là người thực hiện đến cùng.</li>
        </ul>
      </Container>
    );
  }
}

export default Index;
