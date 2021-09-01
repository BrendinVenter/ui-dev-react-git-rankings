import React from 'react';
import LanguagesNav from './ui/LanguagesNav';
import { fetchPopularRepos } from '../utils/api';
import ReposGrid from './ui/ReposGrid';

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: {},
      error: null,
    };

    this.updateLanguage = this.updateLanguage.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      error: null,
    });

    // eslint-disable-next-line react/destructuring-assignment
    if (!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then((data) => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [selectedLanguage]: data,
            },
          }));
        })
        .catch((error) => {
          console.warn('Error fetching repos: ', error);

          this.setState({
            error: 'There was an error fetching the repositories.',
          });
        });
    }
  }

  isLoading() {
    const { selectedLanguage, repos, error } = this.state;

    return !repos[selectedLanguage] && error === null;
  }

  render() {
    const { selectedLanguage, repos, error } = this.state;
    console.log(repos);

    return (
      <>
        <LanguagesNav handleClick={this.updateLanguage} />

        <div>{this.isLoading() && <p>Loading...</p>}</div>
        <div>{error && <p>{error}</p>}</div>
        <div>
          {repos[selectedLanguage] && (
            <ReposGrid repos={repos[selectedLanguage]} />
          )}
        </div>
      </>
    );
  }
}
