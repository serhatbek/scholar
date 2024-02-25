import './Courses.scss';
import { dataCourses } from '../../assets/data/dataCourses';
import { Banner, CourseCard } from '../../components';
import { useId } from 'react';

const Courses = () => {
  const { dataBreadcrumb, heading, filterBtnList, cards } = dataCourses;
  const filterMenuItems = [...new Set(filterBtnList?.map((item) => item))];
  // console.log(filterMenuItems);
  return (
    <>
      <Banner heading={heading} items={dataBreadcrumb} />
      <section className='event-filter'>
        <div className='container'>
          <div className='event-filter__action'>
            {filterMenuItems?.map((categoryText) => {
              return <button key={useId()}>{categoryText}</button>;
            })}
          </div>
          <div className='box'>
            {cards?.map((item) => (
              <CourseCard key={useId()} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
