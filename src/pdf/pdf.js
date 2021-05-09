import React, {useState} from 'react';
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Pdf = ( )=>{
    const [getPdf, setPdf] = useState(null);

// Create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return(
      <div>
          <Worker
              workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js"
          >
              <div
                  style={{
                      border: '1px solid rgba(0, 0, 0, 0.3)',
                      height: '750px',
                  }}
              >



                  <Viewer
                      fileUrl="https://www.buds.com.ua/images/Lorem_ipsum.pdf"
                      plugins={[
                          // Register plugins
                          defaultLayoutPluginInstance,
                      ]}
                  />

              </div>
          </Worker>




      </div>
    );
};

export default Pdf;
