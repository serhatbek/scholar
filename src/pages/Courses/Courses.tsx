import './Courses.scss';
import { dataCourses } from '../../assets/data/dataCourses';
import { Banner, Button, CourseCard } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCategoryFilter,
  setFilterBtnState,
} from '../../store/redux/categoryFilterSlice';

interface RootState {
  categoryFilter: any;
}

interface FilterButtonProps {
  id: number;
  category: string;
  btnState: boolean;
}

const Courses = () => {
  const { dataBreadcrumb, heading } = dataCourses;
  const { courses, filterButtons } = useSelector(
    (state: RootState) => state.categoryFilter
  );
  const dispatch = useDispatch();

  const handleFilter = (category: string) => {
    dispatch(setCategoryFilter(category));
    dispatch(setFilterBtnState(category));
  };

  return (
    <>
      <Banner heading={heading} items={dataBreadcrumb} />
      <section className='event-filter'>
        <div className='container'>
          <div className='event-filter__action'>
            {filterButtons?.map((item: FilterButtonProps) => {
              return (
                <Button
                  variant='filter'
                  onClick={() => handleFilter(item.category)}
                  btnClass={item.btnState ? 'active' : ''}
                >
                  {item.category}
                </Button>
              );
            })}
          </div>
          <div className='box'>
            {courses?.map((item: any) => (
              <CourseCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
