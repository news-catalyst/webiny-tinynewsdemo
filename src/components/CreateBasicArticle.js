import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_ARTICLE } from '../graphql/mutations';

const CreateBasicArticle = (props) => {
  let headline = props.match.params.headline;
  let locale = props.match.params.locale;

  const [createArticle] = useMutation(CREATE_ARTICLE)

  let newData = {
    variables: {
      data:{
        headline:{
          values:[
            {
              locale: locale,
              value: headline
            }
          ]
        },
        body:{
          values:[
            {
              locale: locale,
              value:[
                {
                  type:"paragraph",
                  children:[
                    {
                      text:"Testing 123."
                    }
                  ]
                }
              ]
            }
          ]
        },
        byline:{
          values:[
            {
              locale: locale,
              value:"5ef2803d2137510007a4cce9"
            }
          ]
        }
      }
    }
  };

  return (
    <section>

      <div className="container">
          <h3 className="title">Create Basic Article (test)</h3>
            <p className="content">
              Headline: {headline}
            </p>
            <p className="content">
              Locale: {locale}
            </p>
      </div>
      <div className="container">
        <form
          onSubmit={e => {
            e.preventDefault();
            createArticle(newData);
          }}
        >
          <button className="button" type="submit">Create Article</button>
        </form>
      </div>
    </section>
  )
};

export default CreateBasicArticle;
