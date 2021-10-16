import React from 'react'
import { Box } from '@ozan-ui/core'

export const BoxExample = ( props ) => {

  return <div>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <Box>
              <div>
                Box Elements
              </div>
            </Box>
          </div>
          <div className="col-lg-4 col-md-4"  style={{height:300}}>
            <Box>
              <div>
                Box Elements
              </div>
            </Box>
          </div>
          <div className="col-lg-4 col-md-4"  style={{height:400}}>
            <Box>
              <div>
                Box Elements
              </div>
            </Box>
          </div>
      </div>
  </div>

}
