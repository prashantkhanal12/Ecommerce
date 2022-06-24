import React from 'react';
import { Card, Heading } from 'components';
import { MdLocationOn, MdSearch } from 'react-icons/md';
import { BsPersonCircle } from 'react-icons/bs';
import { GrNotification } from 'react-icons/gr';
import { FiTag } from 'react-icons/fi';
import { CgShoppingBag } from 'react-icons/cg';

const Navbar = () => {
  return (
    <header className="container py-4">
      <div className="flex-btn">
        <div className="flex">
          <div className="me-4">
            <Heading title="NOVA" />
          </div>
          <Card>
            <div className="flex">
              <MdLocationOn color="#e7302a" size={30} className="mt-1 mb-1" />
              <input
                type="text"
                defaultValue={'Balaju'}
                name=""
                id=""
                placeholder="Balaju"
                className="form-control shadow-none bg-transparent outline-0 border-0"
              />
            </div>
          </Card>
        </div>
        <div className="flex">
          <Card>
            <div className="flex">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search items"
                className="form-control shadow-none bg-transparent outline-0 border-0"
              />
              <MdSearch color="393939" size={30} />
            </div>
          </Card>
          <div className="flex ms-5">
            <FiTag size={35} color="#464646" className="mx-3" />
            <BsPersonCircle size={35} color="#464646" className="mx-3" />
            <GrNotification size={35} color="#464646" className="mx-3" />
            <CgShoppingBag size={35} color="#464646" className="mx-3" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
