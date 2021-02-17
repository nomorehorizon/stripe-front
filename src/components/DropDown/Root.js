import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { Context } from './Provider';

export function DropdownRoot() {
  const {  } = useContext(Context);

  return (
    <div className="dropdown-root">
      <div>
        {}
      </div>
    </div>
  )
}