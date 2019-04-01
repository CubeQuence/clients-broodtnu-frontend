import React from 'react';
import DocumentMeta from 'react-document-meta';

const HeaderContainer = props => {
    const meta = {
        title: props.title,
        description: 'Broodt voor snel eten',
        canonical: 'https://broodt.nl',
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'Broodt, Broodt2'
            }
        }
    };

    return <DocumentMeta {...meta} />;
};

export default HeaderContainer;
