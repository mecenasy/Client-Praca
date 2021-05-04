export const getOrCreateReactPortalsDiv = () => {
   let parent = document.getElementById('react-portals');

   if (!parent) {
      parent = document.createElement('div');
      parent.setAttribute('id', 'react-portals');
      document.body.appendChild(parent);
   }

   return parent;
};

export default getOrCreateReactPortalsDiv;
