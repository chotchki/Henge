package us.henge.web.api;

import java.util.Collections;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import us.henge.pojo.Album;

@RestController
@RequestMapping("/api/albumInformation")
public class AlbumInformation {
	@RequestMapping("/all")
    List<Album> all() {
        return Collections.emptyList();
    }
	
	@RequestMapping
	List<Album> first(){
		return Collections.emptyList();
	}
}