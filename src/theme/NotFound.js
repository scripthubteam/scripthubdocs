/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';
import GlitchClip from 'react-glitch-effect/core/Clip';
import GlitchText from 'react-glitch-effect/core/Text';

function NotFound() {
  return (
    <Layout title="404">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-2">
            
             <GlitchClip>
       <h1>Página no encontrada</h1>
       </GlitchClip>
       <p>Es posible que lo que intentes buscar jamás existió. <GlitchText>¿Lo recuerdas?</GlitchText></p>
       <p><img src="https://i.gifer.com/45y2.gif"></img></p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
