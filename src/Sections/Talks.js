import React from 'react';

let Player = ({ talk_link ,iframe_url}) => {
  if (iframe_url) return <iframe src={iframe_url} width="640" height="360" frameBorder="0" allowFullScreen></iframe>;

  if (talk_link && talk_link.indexOf('youtube') > 0) return <iframe src={iframe_url} width="640" height="360" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>;

  return <div></div>;
}

let Talk = ({ talk_label, talk_link, iframe_url }) => (
  <li className="spaced">
    <Player talk_link={talk_link} iframe_url={iframe_url} />
    <br />
    <a href={talk_link} target="_blank">{talk_label}</a>
  </li>
);

let Talks = ({strings, profile}) => {
  const talks = profile.last_talks;
  console.log(talks);

  return (
    <section id="talks">
    <header className="major">
      <h2>{strings.talks_title}</h2>
    </header>
      <ul className="alt">
        {talks && talks.map(talk => <Talk key={talk.id} {...talk} />)}
      </ul>
    </section>
  )
}

export default Talks;
