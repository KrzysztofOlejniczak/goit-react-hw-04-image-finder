import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import api from './services/api';

const INITIAL_STATE = {
  isLoading: false,
  photos: [],
  page: 1,
  query: '',
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    this.setState(prevS => {
      return {
        query: form[1].value,
      };
    });
  };

  onClickButton = () => {
    this.setState(prevS => {
      return { page: prevS.page + 1 };
    });
  };

  // async componentDidUpdate(prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     this.setState(prevS => {
  //       return {
  //         isLoading: true,
  //       };
  //     });
  //     const response = await api(this.state.query, this.state.page);
  //     this.setState(prevS => {
  //       return {
  //         photos: response.data.hits,
  //         isLoading: false,
  //       };
  //     });
  //   }
  // }

  render() {
    return (
      <div className=".app">
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <ImageGallery photos={this.state.photos} />
        )}
        {this.state.photos.length > 0 && (
          <Button onClick={this.onClickButton} />
        )}

        {/* <Modal /> */}
      </div>
    );
  }
}
