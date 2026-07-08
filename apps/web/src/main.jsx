import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const stages=[['Discovery',91],['Values',86],['Working Session',94],['Final',88]];
const metrics=[['Communication',92],['Technical Depth',88],['Leadership',90],['Problem Solving',85]];

function App(){return <main className="shell"><header><h1>NewVu Interview Studio</h1><p>AI assisted candidate analysis workspace</p></header><section className="glass meter"><h2>Hiring Confidence</h2><strong>87%</strong></section><section className="glass"><h2>Recommended Action</h2><p>Review highlights and submit interviewer recommendation.</p><button>Review Interview</button><button>Submit Recommendation</button></section><section className="grid">{stages.map(s=><article className="glass" key={s[0]}><h3>{s[0]}</h3><strong>{s[1]}%</strong><p>View stage analysis</p></article>)}</section><section className="glass"><h2>Competency Analysis</h2>{metrics.map(m=><div className="bar" key={m[0]}><span>{m[0]}</span><div><i style={{width:m[1]+'%'}}/></div>{m[1]}%</div>)}</section></main>}
createRoot(document.getElementById('root')).render(<App/>);
