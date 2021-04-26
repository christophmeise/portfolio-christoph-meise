import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
  title: string;
  description: string;
}

export default class Seo extends Component<SeoProps> {

  constructor(props: SeoProps) {
    super(props);
  }

  render() {
    const { title, description } = this.props;

    return (
      <Helmet
        htmlAttributes={{
          lang: 'de'
        }}
        title={title}
        meta={[
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: 'Christoph Meise',
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
        ]}
      />
    )
  }
}
