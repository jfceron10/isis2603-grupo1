
package co.edu.uniandes.csw.pyme.persistence;

import co.edu.uniandes.csw.pyme.logic.dto.PymeDTO;
import javax.ejb.Stateless;
import javax.enterprise.inject.Default;

import co.edu.uniandes.csw.pyme.persistence.api.IPymePersistence;
import co.edu.uniandes.csw.pyme.persistence.converter.PymeConverter;
import java.util.List;
import javax.ejb.LocalBean;
import javax.persistence.Query;

@Default
@Stateless 
@LocalBean
public class PymePersistence extends _PymePersistence  implements IPymePersistence {
    
    public List<PymeDTO> searchPyme(String descr) {
        Query q = entityManager.createQuery("select u from SportEntity u where u.description like '%" + descr + "%'");
 
        List list = q.getResultList();
        if (list.size() != 0) {
            return PymeConverter.entity2PersistenceDTOList(list);
        }
        return null;
    }

}